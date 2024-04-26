import React, { useEffect, useRef, useState } from "react";

// style
import styles from "./SidePanel.module.css";

const SidePanel = ({
  children,
  className,
  classNamePanel,
  transformOrigin = "left",
  onOverlayClick,
  classNameOverlay,
  showOverlay = false,
  dataTest = "sidepanel",
  isCloseButtonClicked = false,
}) => {
  const [_mount, _setMount] = useState(false);
  const [_animatedClass, _setAnimatedClass] = useState(styles.show);


  const mountTimeout = useRef();
  const animationTimeout = useRef();

  useEffect(() => {
    mountTimeout.current = setTimeout(() => {
      _setMount(true);
    }, 100);
    return () => {
      clearTimeout(mountTimeout.current);
      clearTimeout(animationTimeout.current);
    };
  }, []);

  const onCloseClick = () => {
    _setAnimatedClass(styles.hide);
    animationTimeout.current = setTimeout(() => {
      onOverlayClick && onOverlayClick();
    }, 300);
  };

  useEffect(() => {
    isCloseButtonClicked && onCloseClick();
  }, [isCloseButtonClicked]);

  if (!_mount) return <></>;
  return (
    <div
      id="sidePanelContainer"
      className={`${styles.sidePanelContainer} ${className}`}
    >
      <div
        data-test={dataTest}
        id="sidePanel"
        className={`${styles.sidePanel} ${_animatedClass} ${styles[transformOrigin]} ${classNamePanel}`}
      >
        {children}
      </div>
      {showOverlay && (
        <div
          id="sidePanelOverlay"
          onClick={onCloseClick}
          className={`${styles.overlay} ${classNameOverlay}`}
        ></div>
      )}
    </div>
  );
};
export default SidePanel;
