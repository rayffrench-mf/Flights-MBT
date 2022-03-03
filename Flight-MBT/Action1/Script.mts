'Login to the Flight GUI WPF application using the 2 passed in parameters
'Default values: Username = John, Password = hp 

a=Parameter("Username")
b=Parameter("Password")

'Start Appolication

'SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"

'WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set a @@ hightlight id_;_1950327744_;_script infofile_;_ZIP::ssf2.xml_;_
'WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set b @@ hightlight id_;_2137164136_;_script infofile_;_ZIP::ssf3.xml_;_
'WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1950326688_;_script infofile_;_ZIP::ssf4.xml_;_
 @@ hightlight id_;_2100371504_;_script infofile_;_ZIP::ssf28.xml_;_
