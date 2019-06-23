import EarthquakesMapPresenter from 'presenters/EarthquakesMapPresenter';
import { testRect } from 'test/testData';

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
    expect(presenter.validateRetangle({...testRect, minLat: 90})).toEqual({
      type: 'warning', content: 'Range of selected latitude is incorrect'
    });
  })

  it('execute validateRetangle with minLong > maxLong',()=>{
    expect(presenter.validateRetangle({...testRect, minLong: 180})).toEqual({
      type: 'warning', content: 'Range of selected longitude is incorrect'
    });
  })

  it('execute validateRetangle with lat out of range',()=>{
    expect(presenter.validateRetangle({...testRect, minLat: -180})).toEqual({
      type: 'warning', content: 'Selected latitude is out of range'
    });
  })

  it('execute validateRetangle with long out of range',()=>{
    expect(presenter.validateRetangle({...testRect, minLong: -360})).toEqual({
      type: 'warning', content: 'Selected longitude is out of range'
    });
  })
})
