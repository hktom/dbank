import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 2333933883993;

  Debug.print(debug_show(currentValue))
};
