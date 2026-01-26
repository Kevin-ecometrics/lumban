
export function getExperienceYears(
  startYear = 1992,
  startMonth = 1 // Febrero (0 = Enero)
): number {
  const startDate = new Date(startYear, startMonth);
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();

  // Ajuste si aún no se cumple el mes de inicio este año
  if (
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() &&
      today.getDate() < startDate.getDate())
  ) {
    years--;
  }

  return years;
}

export default getExperienceYears;
