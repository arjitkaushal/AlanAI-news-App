import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    margin: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "50vh",
    padding: "10%",
    borderRadius: "40%",
    color: "whitesmoke",
    boxShadow:
      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  },

  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
});
