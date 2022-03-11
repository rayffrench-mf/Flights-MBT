' Click the Trashcan icon to delete whatever order has been selected
'This action must start after a Search Order has been completed.
'This action needs to start on the ORDER DETAILS screen

' If we're on the BOOK FLIGHT SEARCH ORDER screen then we failed previously so exit
If WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Exist Then @@ hightlight id_;_1906124760_;_script infofile_;_ZIP::ssf6.xml_;_
	ExitAction
End  If

'If the Trashcan icon is not enabled then exit
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("WpfButton").GetROProperties("enabled")  Then @@ hightlight id_;_2058186184_;_script infofile_;_ZIP::ssf1.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("WpfButton").Click
	WpfWindow("Micro Focus MyFlight Sample").Dialog("Notification").WinButton("Yes").Click @@ hightlight id_;_2753606_;_script infofile_;_ZIP::ssf2.xml_;_
Else
	Reporter.ReportEvent micFail, "Trashcan Order - Trashcan not enabled", "Trashcan icon not enabled. Exiting..."
	ExitAction
End  If

Wait 2 ' The Exist statement below seems to find a little box that exists if we run too fast - so the Wait is necessary
' Wait for Deleted message to appear (about 3-4 seconds) 
If WpfWindow("Micro Focus MyFlight Sample").WpfObject("OrderDeletedMessage").Exist (4) Then
	WpfWindow("Micro Focus MyFlight Sample").WpfObject("OrderDeletedMessage").Output CheckPoint("OrderDeletedNumber") @@ hightlight id_;_2137223792_;_script infofile_;_ZIP::ssf3.xml_;_
End  If

' Flight app ends on BOOK FLIGHT screen with FIND FLIGHTS button available

