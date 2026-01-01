import crudService from "./crud_service"

export const eventsService = {
  index: (path, params) => crudService.index(path, params),
  show: (path, id) => crudService.show(path, id),
  create: (path, payload) => crudService.create(path, payload),
  update: (path, id, payload) => crudService.update(path, id, payload),
  delete: (path, id) => crudService.delete(path, id)
}