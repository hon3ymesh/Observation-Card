import React from "react";
import type { ObservationCardProps, Badge } from "./type";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";

function ObservationCard({
  title,
  author,
  date,
  description,
  badges,
}: ObservationCardProps) {
  return (
    <Card
      sx={{
        width: 383,
        height: 183,
        borderRadius: 2,
        border: "1px solid #E6E6E8",
        boxShadow: "0px 2px 3.24px 0px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: 600, fontSize: 18, color: "grey.900" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 0.5, color: "grey.500", fontSize: 12 }}
        >
          Created by {author} on {date}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: "grey.700", fontSize: 14, lineHeight: 1.35 }}
        >
          {description}
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {badges.map((b: Badge, i: number) => (
          <Avatar
            key={i}
            title={b.title || b.label}
            sx={{
              width: 28,
              height: 28,
              border: "1px solid #E6E6E8",
              bgcolor: "#fff",
              fontSize: 14,
            }}
          >
            {b.label}
          </Avatar>
        ))}
      </Stack>
    </Card>
  );
}

export default ObservationCard;
