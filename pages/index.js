import {
  Breadcrumb,
  Button,
  Card,
  cardFocusableBehavior,
  ChevronEndMediumIcon,
  Divider,
  Flex,
  FlexItem,
  Image,
  Input,
  Label,
  MenuButton,
  MenuIcon,
  SearchIcon,
  Segment,
  Skeleton,
  Text,
  TextArea,
} from "@fluentui/react-northstar";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MenuSide from "./Components/MenuSide";
import {
  StarIcon,
  DownloadIcon,
  MoreIcon,
} from "@fluentui/react-icons-northstar";
import { Pivot, PivotItem } from "@fluentui/react-tabs";
export default function Home() {
  return (
    <div>
      <Flex debug="true" column>
        <Flex styles={{ background: "#6264A7", height: "8vh" }} space="between">
          <Flex>
            <Button
              icon={<MenuIcon inverted />}
              styles={{ height: "100%" }}
              primary
            />
            <Flex.Item>
              <Text
                content="Microsoft Azure"
                size="larger"
                align="start"
                vAlign="center"
                color="white"
                styles={{ width: "30vw" }}
              />
            </Flex.Item>
            <Input size="large" icon={<SearchIcon />} placeholder="Search..." />
          </Flex>
          <Flex space="between" marginRight="10px">
            <Flex column vAlign="center">
              <Text color="white" content="admin@test" />
              <Text color="white" content="contoso" />
            </Flex>
            <Image
              avatar
              styles={{ objectFit: "contain", marginLeft: "5%" }}
              circular
              src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobinCounts.jpg"
            />
          </Flex>
        </Flex>
        <div>
          <Breadcrumb aria-label="breadcrumb">
            <Breadcrumb.Item>
              <Breadcrumb.Link href="">All Services</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Divider>
              <ChevronEndMediumIcon />
            </Breadcrumb.Divider>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="">Virtual Machines</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Divider>
              <ChevronEndMediumIcon />
            </Breadcrumb.Divider>
            <Breadcrumb.Item aria-current="page">VM Quickstart</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Divider />
        <div>
          <Flex>
            <Image
              styles={{
                maxWidth: "70px",
              }}
              src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png"
            />

            <Flex align="start" vAlign="center" justify="start" column>
              <Text content="VMQuickstart" size="larger" weight="semibold" />
              <Text content="Virtual Machine" size="medium" weight="light" />
            </Flex>
          </Flex>
        </div>
      </Flex>
      <Flex gap="gap.small">
        <Flex column styles={{ borderRight: "1px solid grey" }}>
          <Input
            icon={<SearchIcon />}
            placeholder="Search..."
            iconPosition="start"
            fluid
            styles={{ padding: "5%" }}
          />
          <MenuSide />
        </Flex>
        <Divider vertical color="grey" />
        <Flex column fill>
          <Flex gap="gap.small">
            <Button
              icon={<StarIcon />}
              content="Favourite"
              iconPosition="before"
              iconOnly
              text
              title="Favourite"
            />
            <Button
              icon={<DownloadIcon />}
              content="Download"
              iconOnly
              text
              title="Download"
              iconPosition="before"
            />
            <Button content="Deny" />
            <Button content="Accept" primary />

            <Button icon={<MoreIcon />} iconOnly text title="More" />
          </Flex>
          <Divider content="More Details" fill />
          <Flex>
            <Skeleton>
              <Skeleton.Shape />

              <Skeleton.Line width="30%" />
              <Skeleton.Line width="20%" />
            </Skeleton>
          </Flex>
          <Divider />
          <Flex>
            {" "}
            <Pivot
              aria-label="Links of Tab Style Pivot Example"
              linkFormat="tabs"
              styles={{ background: "#6264A7" }}
            >
              <PivotItem headerText="Items on Section 1">
                <Flex space="between" wrap styles={{ padding: "2%" }}>
                  <MenuButton
                    menu={["Call", "Chat", "Favourite"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text content={`Rui Guirrugo`} weight="bold" />
                          <Text content={`Software developer`} temporary />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                  <MenuButton
                    menu={["I can add ", "More options", "Here for you"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text
                            content={`Graph 1 would be here`}
                            weight="bold"
                          />
                          <Text
                            content={`Right Click for more options`}
                            temporary
                          />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                </Flex>
              </PivotItem>
              <PivotItem headerText="Items on Section 2">
                <Flex space="between" wrap>
                  <MenuButton
                    menu={["Call", "Chat", "Favourite"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text content={`Rui Guirrugo`} weight="bold" />
                          <Text content={`Software developer`} temporary />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                  <MenuButton
                    menu={["I can add ", "More options", "Here for you"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text
                            content={`Graph 1 would be here`}
                            weight="bold"
                          />
                          <Text
                            content={`Right Click for more options`}
                            temporary
                          />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                  <Card compact aria-roledescription="image card">
                    <Card.Preview fitted>
                      <Image
                        fluid
                        src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png"
                      />
                    </Card.Preview>
                  </Card>
                </Flex>
              </PivotItem>
              <PivotItem headerText="Items on section 3">
                <Flex space="between" wrap>
                  <MenuButton
                    menu={["Call", "Chat", "Favourite"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text content={`Rui Guirrugo`} weight="bold" />
                          <Text content={`Software developer`} temporary />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                  <MenuButton
                    menu={["I can add ", "More options", "Here for you"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text
                            content={`Graph 1 would be here`}
                            weight="bold"
                          />
                          <Text
                            content={`Right Click for more options`}
                            temporary
                          />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                  <Card compact aria-roledescription="image card">
                    <Card.Preview fitted>
                      <Image
                        fluid
                        src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png"
                      />
                    </Card.Preview>
                  </Card>
                </Flex>
              </PivotItem>
              <PivotItem headerText="Items on Section 4">
                <Flex space="between" wrap styles={{ padding: "2%" }}>
                  <MenuButton
                    menu={["Call", "Chat", "Favourite"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text content={`Rui Guirrugo`} weight="bold" />
                          <Text content={`Software developer`} temporary />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                  <MenuButton
                    menu={["I can add ", "More options", "Here for you"]}
                    contextMenu
                    trigger={
                      <Card
                        accessibility={cardFocusableBehavior}
                        aria-roledescription="user card"
                      >
                        <Card.Header>
                          <Text
                            content={`Graph 1 would be here`}
                            weight="bold"
                          />
                          <Text
                            content={`Right Click for more options`}
                            temporary
                          />
                        </Card.Header>
                        <Card.Body>
                          <Image src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png" />
                        </Card.Body>
                      </Card>
                    }
                  />{" "}
                  <Card compact aria-roledescription="image card">
                    <Card.Preview fitted>
                      <Image
                        fluid
                        src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png"
                      />
                    </Card.Preview>
                  </Card>
                </Flex>
              </PivotItem>
            </Pivot>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
