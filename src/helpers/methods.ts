export const getDeviceType = (): "Desktop" | "Mobile" => {
  if (typeof navigator !== undefined) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  } else return "Desktop";
};
