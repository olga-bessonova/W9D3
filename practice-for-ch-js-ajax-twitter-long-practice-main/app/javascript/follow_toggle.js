import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));

  }

  async handleClick(event) {
    event.preventDefault();
    if (this.followState === "followed") {
      this.unfollow();
    } else if (this.followState === "unfollowed") {
      this.follow();
    }
    // debugger
    console.log(API)
  }

  async follow() {
    await API.followUser()

    
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}