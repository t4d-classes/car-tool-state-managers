export class Cars {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  // all() {
  //   return fetch(this._baseUrl)
  //     .then(res => res.json())
  //     .catch(err => );
  // }

  async all() {
    const res = await fetch(this._baseUrl);
    return await res.json();
  }

  async append(car) {
    
    const res = await fetch(this._baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    return await res.json();
  }

  async replace(car) {
    
    const res = await fetch(this._baseUrl + '/' + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    return await res.json();
  }

  async remove(carId) {

    const res = await fetch(this._baseUrl + '/' + encodeURIComponent(carId), {
      method: 'DELETE',
    });

    return await res.json();
  }

}