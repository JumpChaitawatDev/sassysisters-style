import React from "react";

type UsesettingViewProps = {};
type ReturnTypeUsesettingView = ReturnType<typeof usesettingView>;
function usesettingView(props: UsesettingViewProps) {
  const {} = props;
  return {};
}

type settingViewViewProps = ReturnTypeUsesettingView & {};
let SettingViewView: React.FC<settingViewViewProps> = ({}) => {
  return <>settingViewView</>;
};

type settingViewProps = UsesettingViewProps &
  Omit<settingViewViewProps, keyof ReturnTypeUsesettingView>;
let SettingView: React.FC<settingViewProps> = ({ ...others }) => {
  const settingView = usesettingView({});
  return <SettingViewView {...settingView} {...others} />;
};

export default SettingView;
