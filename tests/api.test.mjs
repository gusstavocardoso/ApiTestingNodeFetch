import fetch from 'node-fetch';
import { expect } from 'chai';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL;

const data = JSON.parse(fs.readFileSync('./data/data.json'));

describe('Testes na API Reqres.in', () => {
  it('Deve fazer uma requisição GET', async () => {
    const response = await fetch(`${BASE_URL}/users/1`);
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.data).to.have.property('id').to.equal(1);
    expect(data.data).to.have.property('email');
    expect(data.data).to.have.property('first_name');
    expect(data.data).to.have.property('last_name');
  });

  it('Deve fazer uma requisição POST', async () => {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(data.newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    expect(response.status).to.equal(201);
    expect(responseData).to.have.property('name').to.equal(data.newUser.name);
    expect(responseData).to.have.property('job').to.equal(data.newUser.job);
    expect(responseData).to.have.property('id');
    expect(responseData).to.have.property('createdAt');
  });

  it('Deve fazer uma requisição PUT', async () => {
    const response = await fetch(`${BASE_URL}/users/2`, {
      method: 'PUT',
      body: JSON.stringify(data.updatedUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    expect(response.status).to.equal(200);
    expect(responseData)
      .to.have.property('name')
      .to.equal(data.updatedUser.name);
    expect(responseData).to.have.property('job').to.equal(data.updatedUser.job);
    expect(responseData).to.have.property('updatedAt');
  });

  it('Deve fazer uma requisição DELETE', async () => {
    const response = await fetch(`${BASE_URL}/users/2`, {
      method: 'DELETE',
    });

    expect(response.status).to.equal(204);
  });
});
