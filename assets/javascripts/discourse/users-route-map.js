export default {
  resource: "user",
  map() {
    this.route(
      "follow",
      { path: "/follow", resetNamespace: true },
      function () {
        this.route("feed", { path: "/feed", resetNamespace: true });
        this.route("followers", { path: "/followers", resetNamespace: true });
        this.route("following", { path: "/following", resetNamespace: true });
      }
    );
  },
};
