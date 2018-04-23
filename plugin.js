const plugin = (editor) => {
  editor.addButton('InsertUserName', {
    text: 'Insert User Name',
    onclick: () => {
      editor.windowManager.open({
        title: 'Insert User Name - Custom Dialog',
        width: 700,
        height: 100,
        body: [
          { type: 'textbox', name: 'firstname', label: 'First Name:' },
          { type: 'textbox', name: 'lastname', label: 'Last Name:' }
        ],
        onsubmit(e) {
          editor.insertContent('<span class=\'abc\'>' + e.data.firstname + ' ' + e.data.lastname + '</span>');
        }
      });
    }
  });
};

export default plugin;
