import * as Colors from "./colors";
import * as Sizing from "./sizing";
import * as Typography from "./typography";

export const bar = {
  primary: {
    alignItems: "center",
    justifyContent: "center",
    padding: Sizing.layout.x30,
    borderRadius: Typography.borderRadius.base,
    backgroundColor: Colors.primary.brand,
  },
  secondary: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: Sizing.layout.x10,
    borderRadius: Typography.borderRadius.base,
  },
};

export const barText = {
  primary: {
    ...Typography.fontSize.x20,
    ...Typography.fontWeight.semibold,
    color: Colors.neutral.white,
  },
  secondary: {
    ...Typography.fontSize.x10,
    ...Typography.fontWeight.regular,
    color: Colors.neutral.s500,
  },
};

export const circular = {
  primary: {
    height: Sizing.layout.x30,
    width: Sizing.layout.x30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary.brand,
    borderRadius: Typography.borderRadius.max,
  },
};
