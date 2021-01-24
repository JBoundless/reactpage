class ReactPage extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "This is a React Page"), /*#__PURE__*/
      React.createElement("p", null, "This is my first page created with React and JSX.  I used CodePen to test it out.  I learned React.js on Codecademy from August to December."), /*#__PURE__*/
      React.createElement("img", { src: "https://c4.wallpaperflare.com/wallpaper/780/1022/482/photoshop-sunlight-usa-sunset-wallpaper-preview.jpg" }), /*#__PURE__*/
      React.createElement("footer", null, "Coded by Jordan Pagkalinawan")));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(ReactPage, null), document.getElementById('reactpage'));