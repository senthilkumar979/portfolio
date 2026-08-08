export interface GeoLocation {
  id: string;
  label: string;
  lat: number;
  lng: number;
  /** Degrees of padding around the marker for the embed bbox */
  span?: number;
}

export const locations = {
  mol: {
    id: "mol",
    label: "Mol, Belgium",
    lat: 51.1914,
    lng: 5.1156,
    span: 0.06,
  },
  brussels: {
    id: "brussels",
    label: "Brussels, Belgium",
    lat: 50.8503,
    lng: 4.3517,
    span: 0.08,
  },
  coimbatore: {
    id: "coimbatore",
    label: "Coimbatore, India",
    lat: 11.0168,
    lng: 76.9558,
    span: 0.1,
  },
  chennai: {
    id: "chennai",
    label: "Chennai, India",
    lat: 13.0827,
    lng: 80.2707,
    span: 0.1,
  },
  india: {
    id: "india",
    label: "India",
    lat: 20.5937,
    lng: 78.9629,
    span: 12,
  },
} as const satisfies Record<string, GeoLocation>;

export type LocationId = keyof typeof locations;

const LABEL_TO_ID: Record<string, LocationId> = {
  "Mol, Belgium": "mol",
  "Brussels, Belgium": "brussels",
  "Coimbatore, India": "coimbatore",
  "Chennai, India": "chennai",
  India: "india",
};

export function resolveLocation(
  labelOrId: string,
): (typeof locations)[LocationId] | null {
  if (labelOrId in locations) {
    return locations[labelOrId as LocationId];
  }
  const id = LABEL_TO_ID[labelOrId];
  return id ? locations[id] : null;
}

export function osmEmbedSrc(place: GeoLocation): string {
  const span = place.span ?? 0.08;
  const minLng = place.lng - span;
  const minLat = place.lat - span * 0.7;
  const maxLng = place.lng + span;
  const maxLat = place.lat + span * 0.7;
  const bbox = encodeURIComponent(
    `${minLng},${minLat},${maxLng},${maxLat}`,
  );
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${place.lat}%2C${place.lng}&theme=dark`;
}

export function osmBrowseUrl(place: GeoLocation): string {
  return `https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=12/${place.lat}/${place.lng}`;
}
