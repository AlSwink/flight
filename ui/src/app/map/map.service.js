/* @ngInject */
class MapService {
  constructor ($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl
    this.flights = {}
  }

  getMarkerByCityName (name) {
    return this.$http
      .get(`${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }

  getAllFlights () {
    return this.$http
      .get(`${this.apiUrl}/flights`)
      .then(result => {
        this.flights = result.data
        return this.flights
      })
  }

  getAllLocations () {
    return this.$http
      .get(`${this.apiUrl}/location`)
      .then(result => result.data)
  }
}

export default MapService
