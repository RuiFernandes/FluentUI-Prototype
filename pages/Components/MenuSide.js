import { Menu } from "@fluentui/react-northstar";
import {
  BookmarkIcon,
  WordIcon,
  CalendarIcon,
} from "@fluentui/react-icons-northstar";

function MenuSide() {
  const items = [
    {
      icon: (
        <BookmarkIcon
          {...{
            outline: true,
          }}
        />
      ),
      key: "editorials",
      content: "Editorials",
    },
    {
      icon: <WordIcon {...{}} />,
      key: "review",
      content: "Reviews",
    },
    {
      key: "events",
      content: "Upcoming Events",
    },
    {
      icon: <CalendarIcon {...{}} />,
      key: "moreevents",
      content: "View full calendar with content so long that it wraps",
      menu: {
        items: [
          {
            key: "1",
            content: "item1",
          },
          {
            key: "2",
            content: "item2",
          },
          {
            key: "3",
            content: "item3",
          },
        ],
      },
    },
    {
      icon: (
        <BookmarkIcon
          {...{
            outline: true,
          }}
        />
      ),
      key: "editorials",
      content: "Editorials",
    },
    {
      icon: <WordIcon {...{}} />,
      key: "review",
      content: "Reviews",
    },
    {
      key: "events",
      content: "Upcoming Events",
    },
    {
      icon: <CalendarIcon {...{}} />,
      key: "moreevents",
      content: "View full calendar with content so long that it wraps",
      menu: {
        items: [
          {
            key: "1",
            content: "item1",
          },
          {
            key: "2",
            content: "item2",
          },
          {
            key: "3",
            content: "item3",
          },
        ],
      },
    },
  ];
  return (
    <div>
      <Menu defaultActiveIndex={0} items={items} vertical pointing />
    </div>
  );
}

export default MenuSide;
