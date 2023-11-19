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

//Convert fa numbers to en
// export const p2e = (s: any) =>
//   s.replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

export const p2e = (s: any) =>
  /^[0-9 | \u06F0-\u06F9\s][.\d | \u06F0-\u06F9\s]*(,\d+)?$/g.test(s)

export const checkIfNumber = (e: any) => {
  const s = e.target.value
  const charLength = s.length

  return !charLength || p2e(s)
}

export const getStartFormattedDate = (dateString: Date | string) => {
  const date = new Date(dateString)
  date.getDate() //Set Date
  date.setHours(0, 0, 0) // Set hours, minutes and seconds
  return date
}

export const generateArrOfNumbers = (num1: number, num2: number) => {
  const arr: {}[] = []
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      const temp: { label: number; value: string } = {
        label: num1,
        value: String(num2),
      }
      temp.label = i
      temp.value = i.toString()
      arr.push(temp)
    }
  }
  return arr.reverse()
}

export const normalizeInvalidPersianDate = (date: string) => {
  const oldGoodTimes = new Date(date) // January = 0
  const actualDate = new Date()
  if (oldGoodTimes.getFullYear() < 621) {
    if (actualDate.getTime() - oldGoodTimes.getTime() >= 0) {
      return ''
    } else {
      return new Date(date)
    }
  } else {
    return new Date(date)
  }
}

export const convertDayOfWeekToPersian = (dayName: string) => {
  switch (dayName) {
    case 'Saturday':
      return 'شنبه'

    case 'Sunday':
      return 'یکشنبه'

    case 'Monday':
      return 'دوشنبه'

    case 'Tuesday':
      return 'سه شنبه'

    case 'Wednesday':
      return 'چهارشنبه'

    case 'Thursday':
      return 'پنج شنبه'

    case 'Friday':
      return 'جمعه'
  }
}
export const convertDayOfWeekToNumber = (dayName: string) => {
  switch (dayName) {
    case 'Saturday':
      return 0

    case 'Sunday':
      return 1

    case 'Monday':
      return 2

    case 'Tuesday':
      return 3

    case 'Wednesday':
      return 4

    case 'Thursday':
      return 5

    case 'Friday':
      return 6
  }
}

export const handleLogout = () => {
  // localStorage.clear()
  // store.dispatch({ type: 'logout' })
  // window.open('/login', '_self')
}

export const convertRialToToman = (rial?: string | number) =>
  Math.round(Number(rial) / 10)

export const appendToFormData = (formData: FormData, dataName: string, dataValue: any)=> {
  if(dataValue) formData.append(dataName,dataValue)
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