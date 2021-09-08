
function lightLogic() {
  if (!switchA.isUp()) {
    light.on();
  } else {
    light.off();
  }
}
