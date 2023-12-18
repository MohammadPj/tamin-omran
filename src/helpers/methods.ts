import {store} from "~/store/store";

export const getDeviceType = (): "Desktop" | "Mobile" => {
  if (typeof navigator !== undefined) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  } else return "Desktop";
};

export const clearObject = <Type extends {}>(obj: Type): Type => {
  const res = Object.entries(obj).filter(
    entry => !(entry[1] === undefined || entry[1] === '')
  )
  return Object.fromEntries(res) as Type
}

export const p2e = (s: any) =>
  /^[0-9 | \u06F0-\u06F9\s][.\d | \u06F0-\u06F9\s]*(,\d+)?$/g.test(s)

export const checkIfNumber = (e: any) => {
  const s = e.target.value
  const charLength = s.length

  return !charLength || p2e(s)
}

export const handleLogout = () => {
  localStorage.clear()
  store.dispatch({ type: 'logout' })
  window.open('/', '_self')
}

export const handleDownload = async (link: string, nameOfDownload: string) => {
  const response = await fetch(link);

  const blobImage = await response.blob();

  const href = URL.createObjectURL(blobImage);

  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;

  document.body.appendChild(anchorElement);
  anchorElement.click();

  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
}

export const handleAppendFormData = (formData: FormData, name: string, value: any) => {
  if(value !== undefined) {
    formData.append(name, value)
  }
}