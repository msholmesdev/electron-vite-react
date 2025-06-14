export const CardWidth = "200px";
export const CardHeight = "450px";
export const CARD_TYPE_VALUES = [
  "farmer",
  "karen",
  "gold_digger",
  "pirate",
  "politician",
  "thief",
  "lawyer",
  "gamer",
  "taxi",
  "intern",
] as const;

export type CardType = (typeof CARD_TYPE_VALUES)[number];
