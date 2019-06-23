import EarthquakesMapPresenter from 'presenters/EarthquakesMapPresenter';
import { testRect, testCircle } from 'test/testData';

let presenter: EarthquakesMapPresenter;

beforeEach(() => {
  presenter = new EarthquakesMapPresenter();
});

describe('Validate Regional Rectangle is valid',() => {
  it('execute validateRetangle',()=>{
    expect(presenter.validateRetangle(testRect)).toEqual({
      type: 'success', content: ''
    });
  })

  it('execute validateRetangle with minLat > maxLat',()=>{
    expect(presenter.validateRetangle({ ...testRect, minLat: 91 })).toEqual({
      type: 'warning', content: 'Range of selected latitude is incorrect'
    });
  })

  it('execute validateRetangle with minLong > maxLong',()=>{
    expect(presenter.validateRetangle({ ...testRect, minLong: 181 })).toEqual({
      type: 'warning', content: 'Range of selected longitude is incorrect'
    });
  })

  it('execute validateRetangle with lat out of range',()=>{
    expect(presenter.validateRetangle({ ...testRect, minLat: -181 })).toEqual({
      type: 'warning', content: 'Selected latitude is out of range'
    });
  })

  it('execute validateRetangle with long out of range',()=>{
    expect(presenter.validateRetangle({ ...testRect, minLong: -361 })).toEqual({
      type: 'warning', content: 'Selected longitude is out of range'
    });
  })
})

describe('Validate Regional Rectangle is valid',() => {
  it('execute validateCircle',()=>{
    expect(presenter.validateCircle(testCircle)).toEqual({
      type: 'success', content: ''
    });
  })

  it('execute validateCircle with latitude out of range',()=>{
    expect(presenter.validateCircle({ ...testCircle, lat: 91 })).toEqual({
      type: 'warning', content: 'Selected latitude is out of range'
    });
  })

  it('execute validateCircle with longitude out of range',()=>{
    expect(presenter.validateCircle({ ...testCircle, long: 181 })).toEqual({
      type: 'warning', content: 'Selected longitude is out of range'
    });
  })

  it('execute validateCircle with max radius out of range',()=>{
    expect(presenter.validateCircle({ ...testCircle, maxRad: 181 })).toEqual({
      type: 'warning', content: 'Max radius is out of range'
    });
  })

  it('execute validateCircle with max radius km out of range',()=>{
    expect(presenter.validateCircle({ ...testCircle, maxRadKm: 21000 })).toEqual({
      type: 'warning', content: 'Max radius km is out of range'
    });
  })

  it('execute validateCircle with bot radius and radiuskm',()=>{
    expect(presenter.validateCircle({ ...testCircle, maxRadKm: 21000 })).toEqual({
      type: 'warning', content: 'Max radius km is out of range'
    });
  })

})
