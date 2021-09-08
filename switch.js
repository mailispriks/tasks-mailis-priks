function change(s) {
  if (s === 'A') {
    switchA.toggle();
  } else {
    switchB.toggle();
  }

  lightLogic();
}

const light = {
	on: () => {
		document.body.classList.add('on');
	},
	off: () => {
		document.body.classList.remove('on');
	}
}

const switchA = {
	stateA: false,
  state: () => {
    return this.stateA
  },
	isUp: () => {
		return !this.stateA
	},
  isDown: () => {
		return this.stateA
	},
  toggle: () => {
    this.stateA = !this.stateA
    if (this.stateA) {
      document.body.classList.add('on-A');
    } else {
      document.body.classList.remove('on-A');
    }
  }
}

const switchB = {
	stateB: false,
  state: () => {
    return this.stateB
  },
	isUp: () => {
		return !this.stateB
	},
  isDown: () => {
		return this.stateB
	},
  toggle: () => {
    this.stateB = !this.stateB
    if (this.stateB) {
      document.body.classList.add('on-B');
    } else {
      document.body.classList.remove('on-B');
    }
  }
}

lightLogic();


// function lightLogic() {
//   if (switchA.isUp()) {
//     light.on();
//   } else {
//     light.off();
//   }

//   if (switchB.isUp()) {
//     light.on();
//   } else {
//     light.off();
//   }
// }
