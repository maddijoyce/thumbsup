import glam from "glamorous";
import { keyframes } from "glamor";

export const Container = glam.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
});

export const Background = glam.div(
  {
    backgroundColor: "#263238",
    display: "grid",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 98
  },
  ({ template }) => ({
    gridTemplateColumns: template || "auto auto auto"
  })
);

export const ThumbUp = glam.div(
  {
    "::before": {
      filter: "blur(5px)",
      content: `''`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: -10,
      left: -10,
      right: -10,
      bottom: -10
    },
    "::after": {
      content: `''`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    display: "block",
    position: "relative",
    overflow: "hidden"
  },
  ({ src }) => ({
    "::before": {
      backgroundImage: `url(${src})`
    },
    "::after": {
      backgroundImage: `url(${src})`
    }
  })
);

export const Foreground = glam.div({
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  borderRadius: 5,
  color: "white",
  textAlign: "center",
  maxWidth: 750,
  width: "98%",
  position: "relative",
  zIndex: 99,
  padding: "20px 5px"
});

export const Title = glam.h1({
  fontWeight: "300",
  fontSize: 40,
  letterSpacing: 1
});

export const Description = glam.p({
  fontWeight: "200",
  fontSize: 18,
  lineHeight: 1.6
});

export const Row = glam.div({
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "center"
});

export const shadowFade = keyframes({
  "0%": { boxShadow: "0 0 4px 2px rgba(41, 182, 246, 0)" },
  "40%": { boxShadow: "0 0 4px 2px rgba(41, 182, 246, 0.8)" },
  "90%": { boxShadow: "0 0 4px 2px rgba(41, 182, 246, 0)" }
});

export const spins = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});

export const Button = glam.button({
  "&:focus": {
    animation: `${shadowFade} 0.4s 1 ease-in-out`,
    outline: "none"
  },
  alignItems: "center",
  background: "none",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  fontSize: "1.5rem",
  letterSpacing: "1px",
  margin: "0.6rem",
  textTransform: "uppercase",
  border: "2px solid white",
  color: "white",
  borderRadius: "50%",
  padding: "1.4rem"
});

export const FileUpload = glam.input({
  position: "absolute",
  top: -5000,
  left: -5000
});

export const Loading = glam.div({
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 100
});

export const Spinner = glam.div({
  animation: `${spins} 1s linear infinite`,
  border: "3px solid white",
  borderTopColor: "#03A9F4",
  borderRadius: "50%",
  height: 80,
  width: 80,
  margin: "1rem"
});
