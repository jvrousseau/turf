/// <reference types="geojson" />

type Feature = GeoJSON.Feature<any>;
type Features = GeoJSON.FeatureCollection<any>;
type BBox = Array<number>;

/**
 * http://turfjs.org/docs/#bbox
 */
declare function bbox(features: Feature | Features): BBox;
declare namespace bbox { }
export = bbox;
