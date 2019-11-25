class Chat {
  render() {

  }

  sendValue() {
    const elBtn = document.querySelector('chat--button');
    elBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(this.getInputValue());
    });
  }

  getInputValue() {
    const el = document.querySelector('chat--input');
    return el.value;
  }
}

const chat = new Chat();

chat.render();
