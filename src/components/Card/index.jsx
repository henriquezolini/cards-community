import {
  CardContainer,
  ValueContainer,
  TitleContainer,
  BodyContainer,
  IconBackground,
  FooterContainer,
  VariationValue,
  VariationIcon,
  VariationDescription
} from "./styles";
import PropTypes from "prop-types";

export default function Card({ value, title, dark, icon, iconPosition, variation, description }) {
  const floatVariation = parseFloat(variation);
  const isNegativeVariation = variation < 0;
  return (
    <CardContainer dark={dark}>
      <BodyContainer reverse={iconPosition === "right"}>
        {icon && <IconBackground iconPosition={iconPosition}>{icon}</IconBackground>}
        <div>
          <ValueContainer dark={dark}>{value}</ValueContainer>
          <TitleContainer dark={dark}>{title}</TitleContainer>
        </div>
      </BodyContainer>
      {variation && (
        <FooterContainer>
          <VariationIcon negative={isNegativeVariation} />
          <VariationValue negative={isNegativeVariation}>
            {floatVariation.toFixed(2)}%
          </VariationValue>
          <VariationDescription dark={dark}>{description}</VariationDescription>
        </FooterContainer>
      )}
    </CardContainer>
  );
}

Card.defaultProps = {
  variation: undefined,
  description: "",
  icon: undefined,
  iconPosition: "left",
  dark: false
};

Card.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  variation: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  dark: PropTypes.bool
};
