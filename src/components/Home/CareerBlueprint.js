import { CheckOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Row, Typography } from "antd";

const { Title, Text } = Typography;

export default function CareerBlueprint() {
  return (
    <div className="p-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg shadow-xl">
      <div className="customHeading text-center">
        High-Income Career Blueprint
      </div>

      <div className="text-center text-white mb-8">
        <Text className="text-lg">12–14 Weeks</Text>
      </div>

      <Row gutter={[16, 16]} justify="center">
        {/* Stage 1 */}
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          className="flex justify-center mb-8"
        >
          <Card
            className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 w-full shadow-lg"
            bordered={false}
            bodyStyle={{ padding: "20px" }}
          >
            <CheckOutlined className="text-white text-4xl mb-4" />
            <Title level={4} className="text-white">
              Apply
            </Title>
            <Text className="text-white">Start your journey today.</Text>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          className="flex justify-center mb-8"
        >
          <Card
            className="bg-gradient-to-r from-teal-600 to-teal-400 p-6 w-full shadow-lg"
            bordered={false}
            bodyStyle={{ padding: "20px" }}
          >
            <CheckOutlined className="text-white text-4xl mb-4" />
            <Title level={4} className="text-white">
              Join Expert Led Classes
            </Title>
            <Text className="text-white">Learn from industry leaders.</Text>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          className="flex justify-center mb-8"
        >
          <Card
            className="bg-gradient-to-r from-green-600 to-green-400 p-6 w-full shadow-lg"
            bordered={false}
            bodyStyle={{ padding: "20px" }}
          >
            <CheckOutlined className="text-white text-4xl mb-4" />
            <Title level={4} className="text-white">
              Get Certified
            </Title>
            <Text className="text-white">Boost your credibility.</Text>
          </Card>
        </Col>
      </Row>

      <Divider className="border-white" />
      {/*  */}
      <div className="text-center text-white mb-8">
        <Text className="text-xl font-semibold">Post Graduation</Text>
      </div>

      <Row gutter={[16, 16]} justify="center">
        {/* Stage 2 */}
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          className="flex justify-center mb-8"
        >
          <Card
            className="bg-gradient-to-r from-purple-600 to-purple-400 p-6 w-full shadow-lg"
            bordered={false}
            bodyStyle={{ padding: "20px" }}
          >
            <CheckOutlined className="text-white text-4xl mb-4" />
            <Title level={4} className="text-white">
              Land a High Paying Job
            </Title>
            <Text className="text-white">Start your rewarding career.</Text>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          className="flex justify-center mb-8"
        >
          <Card
            className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-6 w-full shadow-lg"
            bordered={false}
            bodyStyle={{ padding: "20px" }}
          >
            <CheckOutlined className="text-white text-4xl mb-4" />
            <Title level={4} className="text-white">
              Career Support
            </Title>
            <Text className="text-white">
              Continuous guidance post-graduation.
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
