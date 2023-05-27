export const customStyles = {
  content: {
    position: "absolute",
    top: "25%",
    left: "30%",
    right: "30%",
    bottom: "25%",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    padding: "25px",
    alignSelf: "center",
    height: "60%",
    paddingTop: "30px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000ba",
    zIndex: 9999,
  },
};

export const customStyles2 = {
  content: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    top: "20%",
    width: "30%",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    padding: "25px",
    alignSelf: "center",
    height: "auto",
    paddingTop: "30px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000ba",
    zIndex: 9999,
  },
};

let theme = JSON.parse(localStorage.getItem("theme"));
export const customStyles3 = {
  content: {
    position: "absolute",
    top: "12%",
    left: "20%",
    right: "20%",
    bottom: "12%",
    background: theme == "dark" ? "#1b1b1b" : "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    width: "60%",
    padding: "25px",
    alignSelf: "center",
    height: "85%",
    paddingTop: "30px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000aa",
    zIndex: 9999,
  },
};
