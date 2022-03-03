RunAction "100-Login", oneIteration
RunAction "200-BookFlight", oneIteration
RunAction "400-DeleteOrderNum", oneIteration, Parameter("200-BookFlight", "OrderNumberOut")
RunAction "600-Logout", oneIteration
