import * as yup from 'yup';

const createCheckListSchema = yup.object({
  farmerName: yup.string().required("O nome do fazendeiro é obrigatório"),
  farmName: yup.string().required("O nome da fazenda é obrigatório"),
  farmCity: yup.string().required("A cidade da fazenda é obrigatório"),
  supervisorName: yup.string(),
  milkQuantity: yup.string().required("Campo obrigatório"),
  cowsHeadQuantity: yup.string().required("Campo obrigatório"),
})

const updateCheckListSchema = yup.object({
  farmerName: yup.string().required("O nome do fazendeiro é obrigatório"),
  farmName: yup.string().required("O nome da fazenda é obrigatório"),
  farmCity: yup.string().required("A cidade da fazenda é obrigatório"),
  supervisorName: yup.string().required("O nome do supervisor é obrigatório"),
  milkQuantity: yup.string().required("Campo obrigatório"),
  cowsHeadQuantity: yup.string().required("Campo obrigatório"),
})

export { createCheckListSchema, updateCheckListSchema };