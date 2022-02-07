import * as React from "react";
import SubtitlePhrase from "../subtitle_phrase/index";
import SubtitleLine from "../subtitle_line/index";
class Contact extends React.PureComponent {
  public render(): JSX.Element {
    const contactLine = [
      [
        {
          text: "email",
          link: "mailto:hello@jasme.et",
          linkStyle: "teal",
        },
      ],
      [
        {
          text: "linkedin",
          link: "http://www.linkedin.com/in/arorajasmeet",
          linkStyle: "red",
        },
      ],
      [
        {
          text: "github",
          link: "http://www.github.com/jasmeet107",
          linkStyle: "blue",
        },
      ],
      [
        {
          text: "500px",
          link: "https://500px.com/p/jasmeet107?view=photos",
          linkStyle: "lavender",
        },
      ],
    ];

    return (
      <div>
        <SubtitleLine linkTextMaps={contactLine} />
      </div>
    );
  }
}

export default Contact;
