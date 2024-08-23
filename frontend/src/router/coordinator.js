export const goToHome = (navigate, name) => {
  navigate(`/${name}`)
}

export const goToLocation = (navigate, name) => {
  navigate(`/${name}/local`)
}

export const goToGift = (navigate, name) => {
  navigate(`/${name}/presentes`)
}

export const goToCheck = (navigate, name) => {
  navigate(`/${name}/confirmacao`)
}

export const goToError = (navigate) => {
  navigate('/')
}