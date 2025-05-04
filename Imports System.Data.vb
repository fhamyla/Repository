' Database'
Imports System.Data.SQLite

Module Program

    Sub Main()
        ' Paths to your SQLite database files
        Dim loginDbPath As String = "Data Source=login_data.db;"
        Dim researchDbPath As String = "Data Source=research_data.db;"

        ' Create SQLite connections
        Dim loginConn As New SQLiteConnection(loginDbPath)
        Dim researchConn As New SQLiteConnection(researchDbPath)

        Try
            loginConn.Open()
            researchConn.Open()
            Console.WriteLine("Connected to both databases.")

            ' --- Query users table ---
            Console.WriteLine("Users:")
            Dim userCmd As New SQLiteCommand("SELECT * FROM users", loginConn)
            Dim userReader As SQLiteDataReader = userCmd.ExecuteReader()
            While userReader.Read()
                Console.WriteLine("Username: " & userReader("username"))
            End While
            userReader.Close()

            ' --- Query research_paper table ---
            Console.WriteLine(vbCrLf & "Research Papers:")
            Dim researchCmd As New SQLiteCommand("SELECT * FROM research_paper", researchConn)
            Dim researchReader As SQLiteDataReader = researchCmd.ExecuteReader()
            While researchReader.Read()
                Console.WriteLine("Title: " & researchReader("title") & ", Author: " & researchReader("author"))
            End While
            researchReader.Close()

        Catch ex As Exception
            Console.WriteLine("Error: " & ex.Message)
        Finally
            loginConn.Close()
            researchConn.Close()
            Console.WriteLine("Connections closed.")
        End Try
    End Sub

End Module
