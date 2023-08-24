export const GButton = ({url}) =>(

  <button
    type="button"
    style = {{
      backgroundImage: `url('https://media.discordapp.net/attachments/1141377366589976747/1142065708969230476/ghlogo_white.png?width=593&height=593')`, 
      backgroundColor: 'white',
      backgroundRepeat:  "no-repeat", 
      backgroundSize: '50px',
      paddingLeft: '50px',
      paddingRight: '10px',
      lineHeight: '50px',

      fontSize: '18px',
      fontWeight: '550',
      color: 'black',
      borderRadius: '10px',
      borderColor: 'black',
      borderWidth: '3px'
    }}
    onClick={(e) => {
      e.preventDefault();
      // window.location.href=url;
      window.open(url, '_blank');
      }}
    > Download
  </button>

);

export const DsButton = () => (

  <button
    type="button"
    style = {{
      backgroundImage: `url('https://cdn.discordapp.com/attachments/989963898570551296/1144160836319985745/dslogo1-removebg-preview.png')`, 
      backgroundRepeat:  "no-repeat",
      backgroundSize: '50px',
      paddingLeft: '50px',
      paddingRight: '10px',
      lineHeight: '50px', 
      backgroundColor: 'white',
      

      fontSize: '18px',
      fontWeight: '550',
      color: 'black',
      borderRadius: '10px',
      borderColor: 'black',
      borderWidth: '3px'
    }}
    onClick={(e) => {
      e.preventDefault();
      // window.location.href=url;
      window.open('https://discord.esx-framework.org/', '_blank');
      }}
    > Discord
  </button>
);

