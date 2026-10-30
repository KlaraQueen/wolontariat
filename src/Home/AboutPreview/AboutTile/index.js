import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Tile, TileIcon, TileTitle, TileDescription } from "./styled";

export const AboutTile = ({ value, Icon }) => (
  <Tile as={Link} to="/o-nas">
    <TileIcon>
      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
    </TileIcon>
    <ArrowUpRight className="tile-arrow" size={18} aria-hidden="true" />
    <TileTitle>{value.title}</TileTitle>
    <TileDescription>{value.description}</TileDescription>
  </Tile>
);
