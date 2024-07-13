export const CardESX = ({ icon, url, text }) =>(
    <a href = {url}>
    <div
      style = {{
        width: '200px',
        height: '200px',
        backgroundImage: `url(${icon})`, 
        // backgroundColor: 'white',
        backgroundRepeat:  "no-repeat", 
        backgroundSize: '100px',
        backgroundPosition: 'center top',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '110px',
        lineHeight: '30px',
  
        fontSize: '15px',
        fontWeight: '500px',
        color: 'orange',
        borderRadius: '10px',
        borderColor: 'orange',
        borderWidth: '2px',
        borderStyle: 'dashed',
        textAlign: 'center',
      }}> {text}
    </div></a>
  
  );