export const GButton = ({ url }) => (
  <button
    type="button"
    style={{
      backgroundImage: `url('https://media.discordapp.net/attachments/1141377366589976747/1142065708969230476/ghlogo_white.png?width=593&height=593')`,
      backgroundColor: "white",
      backgroundRepeat: "no-repeat",
      backgroundSize: "50px",
      paddingLeft: "50px",
      paddingRight: "10px",
      lineHeight: "50px",

      fontSize: "18px",
      fontWeight: "550",
      color: "black",
      borderRadius: "10px",
      borderColor: "black",
      borderWidth: "3px",
    }}
    onClick={(e) => {
      e.preventDefault();
      // window.location.href=url;
      window.open(url, "_blank");
    }}
  >
    {" "}
    Download
  </button>
);

export const DsButton = () => (
  <button
    type="button"
    style={{
      top: "50%",
      display: "inline-flex",
      backgroundColor: "white",
      gap: "5px",
      padding: "5px",
      fontSize: "18px",
      fontWeight: "550",
      color: "black",
      borderRadius: ".5rem",
      borderColor: "black",
      borderWidth: "3px",
    }}
    onClick={(e) => {
      e.preventDefault();
      // window.location.href=url;
      window.open("https://discord.esx-framework.org/", "_blank");
    }}
  >
    <img
      src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
      alt="Discord Logo"
      style={{
        width: "35px",
      }}
    />
    Discord
  </button>
);
