import styled from "@emotion/styled";

export const CardContainer = styled.div(({ dark }) => ({
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
  background: dark ? "#303030" : "#ffffff",
  borderRadius: 12,
  padding: 28,
  width: 300
}));

export const BodyContainer = styled.div(({ reverse }) => ({
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
  justifyContent: reverse ? "space-between" : "flex-start"
}));

export const IconBackground = styled.div(({ iconPosition }) => ({
  background: "#f2994a33",
  borderRadius: 50,
  marginRight: iconPosition === "left" ? 24 : 0,
  padding: 15,
  height: 64,
  width: 64
}));

export const ValueContainer = styled.h1(({ dark }) => ({
  color: dark ? "#ffffff" : "#000000bf",
  fontWeight: 500,
  fontSize: 34
}));

export const TitleContainer = styled.h2(({ dark }) => ({
  color: dark ? "#ffffffcc" : "#00000080",
  fontWeight: 400,
  fontSize: 20
}));

export const FooterContainer = styled.div(() => ({
  display: "flex",
  marginTop: 14
}));

export const VariationIcon = styled.div(({ negative }) => ({
  width: 16,
  height: 16,
  marginRight: 2,
  background: negative ? "url(/variation-down.svg)" : "url(/variation-up.svg)"
}));

export const VariationValue = styled.div(({ negative }) => ({
  color: negative ? "#EB5757" : "#27AE60",
  fontWeight: 500,
  fontSize: 12
}));

export const VariationDescription = styled.div(({ dark }) => ({
  color: dark ? "#FFFFFF99" : "#00000059",
  fontWeight: 500,
  marginLeft: 14,
  fontSize: 12
}));
