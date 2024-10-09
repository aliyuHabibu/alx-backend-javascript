export default function getBudgetObject(s_income, s_gdp, s_capita) {
  const budget = {
    income: s_income,
    gdp: s_gdp,
    capita: s_capita
  };

  return budget;
}
