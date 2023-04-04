
const Array = () => {
  const rawArray = [1, 100, 5, 6, 13, 13, 22, 5, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 12, 14, 15, 16, 17, 12, 12]

  const NewArray = rawArray.filter((element, index) => {
    return rawArray.indexOf(element) == index;
  })
  NewArray.sort((a, b) => a - b);
  console.log("Старый " + rawArray)
  console.log("Новый " + NewArray)
}
export default Array