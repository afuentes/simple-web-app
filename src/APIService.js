import Axios from 'axios';
 
const RESOURCE_NAME = '/dialog';
 
export default {
  get(id) {
    return Axios.get(RESOURCE_NAME+"/"+id+".json");
  }
  /**  TODO define all method
  create(data) {
    return Axios.post(RESOURCE_NAME, data);
  },
  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data);
  },
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  }
  */
};