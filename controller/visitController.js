export default class VisitController {
  constructor(visit) {
    this.visit = visit;
  }

  async get_Visits() {
    return this.visit.getVisits();
  }

  async set_Visit(departament, reason, date) {
    return this.visit.setVisit(departament, reason, date);
  }
}
