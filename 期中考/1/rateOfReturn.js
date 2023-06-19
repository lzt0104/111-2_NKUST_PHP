function getRateOfReturn(buyPrice, salePrice) {
  const answer = (salePrice - buyPrice - 0.001425 * buyPrice - 0.004425 * salePrice) / buyPrice
  return answer
}

export default getRateOfReturn