export const goToHome = (navigate, name, n) => {
  navigate(`/${name}/${n}`)
}

export const goToLocation = (navigate, name, n) => {
  navigate(`/${name}/${n}/local`)
}

export const goToGift = (navigate, name, n) => {
  navigate(`/${name}/${n}/presentes`)
}

export const goToCheck = (navigate, name, n) => {
  navigate(`/${name}/${n}/confirmacao`)
}