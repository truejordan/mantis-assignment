const FormatUTC = (timestamp: string | Date) => {
    return new Date(timestamp).toLocaleString("en-US", {
        timeZone: "UTC",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
};

export default FormatUTC;
