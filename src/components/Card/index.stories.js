import Card from "./index";
import "../../styles/globals.css";

export default {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};

export const Basic = {
  args: {
    title: "Messages",
    value: 220
  }
};

export const WithIconLeft = {
  args: {
    title: "Messages",
    value: 220,
    icon: <img src="/message-outline.svg" />,
    iconPosition: "left"
  }
};

export const WithIconRight = {
  args: {
    title: "Messages",
    value: 220,
    icon: <img src="/message-outline.svg" />,
    iconPosition: "right"
  }
};

export const WithIconAndVariation = {
  args: {
    title: "Messages",
    value: 220,
    icon: <img src="/message-outline.svg" />,
    iconPosition: "left",
    variation: 3.22,
    description: "Since last month"
  }
};

export const BasicDark = {
  args: {
    title: "Messages",
    value: 220,
    dark: true
  }
};

export const WithIconLeftDark = {
  args: {
    title: "Messages",
    value: 220,
    icon: <img src="/message-outline.svg" />,
    iconPosition: "left",
    dark: true
  }
};

export const WithIconRightDark = {
  args: {
    title: "Messages",
    value: 220,
    icon: <img src="/message-outline.svg" />,
    iconPosition: "right",
    dark: true
  }
};

export const WithIconAndVariationDark = {
  args: {
    title: "Messages",
    value: 220,
    icon: <img src="/message-outline.svg" />,
    iconPosition: "left",
    variation: 3.22,
    description: "Since last month",
    dark: true
  }
};
