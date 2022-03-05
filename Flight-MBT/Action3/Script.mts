' Search for an existing order by one of three values which are passed in (only one should be non-empty)

a=Parameter("OrderNumber")
b=Parameter("OrderDate")
c=Parameter("PassengerName")

'Get to BOOK FLIGHT and SEARCH ORDER screen if you aren't already there
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Exist (5) Then @@ hightlight id_;_2137773064_;_script infofile_;_ZIP::ssf9.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
End If

WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_2136678120_;_script infofile_;_ZIP::ssf2.xml_;_

' Only pass in one of these three values - only one should be non-empty
If a <> "" Then ' Process by Order Number
	WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_2062105976_;_script infofile_;_ZIP::ssf3.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set a @@ hightlight id_;_2136609336_;_script infofile_;_ZIP::ssf4.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
ElseIf b <>  "" Then ' Process by Order Date
	WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNameOrDateRadio").Set
	WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("byDatePicker").SetDate b @@ hightlight id_;_1955569168_;_script infofile_;_ZIP::ssf15.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
	WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectRow 0 ' Select the first row
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click @@ hightlight id_;_2003838088_;_script infofile_;_ZIP::ssf20.xml_;_
ElseIf c <> "" Then ' Process by Passenger Name
	WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNameOrDateRadio").Set @@ hightlight id_;_2094078072_;_script infofile_;_ZIP::ssf19.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNameWatermark").Set c
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
	WpfWindow("Micro Focus MyFlight Sample").WpfTable("ordersDataGrid").SelectRow 0 ' Select the first row - there must be one
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT ORDER").Click
End If

' Flight app ends on ORDER DETAILS screen with NEW SEARCH  button and the Trashcan icon available

